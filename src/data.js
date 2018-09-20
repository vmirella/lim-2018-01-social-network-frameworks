import firebase from 'firebase';

//Funcion que permite que el usuario abra sesion
const login = (objLogin) => {
  const loginResult = {
    status: '',
    message: ''
  };

	firebase.auth().signInWithEmailAndPassword(objLogin.email, objLogin.password)
  .then((result) => {
    console.log('Ha logrado abrir sesión con éxito', result);
    loginResult.status = 'success';
    loginResult.message = 'Bienvenid@';
    return loginResult;
  })
  .catch((error) => {
    console.log('Ha habido un error', error);
    loginResult.status = 'error';
    let errorCode = error.code;
    if (errorCode === 'auth/wrong-password') {
      loginResult.message = 'Contraseña incorrecta.';
    }
    else {
      loginResult.message = 'Usuario no esta registrado.';
    }
    return loginResult;
  });
}

const loginWithProvider = (provider, cb) => {
	//console.log(provider)
	firebase.auth().signInWithPopup(provider).then(function (result) {
		console.log(result)

		const token = result.credential.accessToken;
		const user = result.user;
		console.log(user)


		cb(null, user);

	}).catch(error => {

		cb(error);
	});

}


//Funcion que crea una ccuenta de usuario con correo y password
const createUser = (email, password, cb) => {
	return firebase.auth().createUserWithEmailAndPassword(email, password)
		.then((result) => {
			console.log('El usuario ha sido creado con cuenta de email y password', result)
			cb(null, result)
		})
		.catch((error) => {
			console.log('Ha habido un error')
			console.log(error)
			cb(error)

		});
}

//Esta funcion guarda en la tabla users los datos del usuario
const registerUserProfile = (dataUser) => {
	firebase.database().ref('users/' + dataUser.id).set({
		username: dataUser.username,
		email: dataUser.email,
		picture: dataUser.picture
	}, (error) => {
		console.log(error);
		console.log('error');
		return false;
	});
	return true;
}

//Esta funcion permite relacionar al usuario con sus posts
const createPost = (postData) => {
	// Generar un id para la publicación.
	const newPostKey = firebase.database().ref().child('posts').push().key;
	// Registrar en el objeto posts y user-post la nueva publicación
	const updates = {};
	postData.id = newPostKey;
	updates['/posts/' + newPostKey] = postData;
	updates['/user-posts/' + postData.uid + '/' + newPostKey] = postData;
	firebase.database().ref().update(updates);
	return newPostKey;
}

//Esta funcion permite editar posts
const editPost = (postId, postData) => {
	const updates = {};
	updates['/posts/' + postId] = postData;
	firebase.database().ref('/posts/' + postId).update(postData);
	//return firebase.database().ref().update(updates);
	return true;
}

//Lee los post para usarlos en el test
const getPostList = () => firebase.database().ref('posts').once('value');

//Esta funcion permite eliminar posts
const deletePost = (postId) => {
	firebase.database().ref('/posts/').child(postId).remove();
}

//Funcion que calcula los likes que se da a un post
const likePost = (idPost, uid, likeBadge) => {
	//Leer cuantos likes tiene
	firebase.database().ref('/posts/' + idPost).once('value').then(function (snapshot) {
		let likes = snapshot.val().likes;
		//sumarle 1
		likes = likes + 1;
		//Actualiza los likes
		firebase.database().ref('posts/' + idPost).update({
			likes: likes
		}, (error) => {
			console.log(error)
		});
		//Imprime los likes en el badge
		likeBadge.innerHTML = likes;
		likeBadge.classList.remove("hidden");
	});
}

const sortPosts = (posts) => {
	return posts.sort((a, b) => { return b.date < a.date });
}

const filterPosts = (postSorted, filterBy, valueFilter) => {
	let postFiltered = null;
	filterBy !== null && valueFilter !== null
		? postFiltered = postSorted.filter(post => post[filterBy].toUpperCase().indexOf(valueFilter.toUpperCase()) !== -1)
			// === valueFilter)
		: postFiltered = postSorted;
	return postFiltered;
}

const showMyPosts = (dataUser, filterBy, valueFilter, cb) => {
	return getPostList()
		.then(post => {
			const posts = Object.values(post.val());
			const postSorted = sortPosts(posts);
			const myPosts = filterPosts(postSorted, 'uid', dataUser.uid);
			const postsFiltered = filterPosts(myPosts, filterBy, valueFilter);
			cb(postsFiltered);
		});
}
const showPosts = (filterBy, valueFilter, cb) => {
	return getPostList()
		.then(post => {
			const posts = Object.values(post.val());
			const postSorted = sortPosts(posts);
			const postPublic = filterPosts(postSorted, 'state', 'publico');
			const postsFiltered = filterPosts(postPublic, filterBy, valueFilter);
			cb(postsFiltered);
		});
}


/*const showPost = (cb) => {
	//al leer sin usar once(), los datos se vuelven a cargar al detectar un cambio en firebase
	var dataPost = firebase.database().ref('/posts/');
	//limitToLast(10) muestra los 10 ultimos
	dataPost.orderByChild('date').limitToLast(10).on('value', (snapshot) => {
		cb(snapshot.val());
	});

	//al leer con once(), los datos se cargar solo una vez
	/*firebase.database().ref('/posts/').once('value').then((value) => {
	  cb(value.val());
	})*/

