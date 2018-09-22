import React from 'react';

class Post extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div key={post.id} className="{post.id} post panel-login">
        <div className="row">
          <div className="col-10">
            <h5 className="card-title">{post.title}</h5>
          </div>
        </div>
        <span className="category"><i className="far fa-folder-open"></i> {post.category}</span>
        <span className="date"><i className="far fa-calendar-alt"></i> </span>
        <hr />
        <img className="card-img-top" src="http://images.estampas.com/2012/07/01/mascotas.jpg.525.0.thumb" width="40" height="350" />
        <p className="card-text">{post.content}</p>
        <div className="buttonSel">
          <button className="{post.id} btn btn-light col-sm-3" id="coment"><i className="far fa-comment-alt"></i> Comentar</button>
          <button className="{post.id} btn btn-light col-sm-3" id="like"><i className="far fa-thumbs-up"></i> Me gusta <span id="badge-{post.id}" className="badge badge-success">{post.likes}</span></button>
        </div>
      </div>
    )
  }
}

export default Post;
