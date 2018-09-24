import React from 'react';

class Post extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="{this.props.id} post panel-login">
        <div className="row">
          <div className="col-10">
            <h5 className="card-title">{this.props.title}</h5>
          </div>
        </div>
        <span className="category"><i className="far fa-folder-open"></i> {this.props.category}</span>
        <span className="date"><i className="far fa-calendar-alt"></i> </span>
        <hr />
        <img className="card-img-top" src="http://images.estampas.com/2012/07/01/mascotas.jpg.525.0.thumb" alt="" width="40" height="350" />
        <p className="card-text">{this.props.content}</p>
        <div className="buttonSel">
          <button className="{this.props.id} btn btn-light col-sm-3" id="coment"><i className="far fa-comment-alt"></i> Comentar</button>
          <button className="{this.props.id} btn btn-light col-sm-3" id="like"><i className="far fa-thumbs-up"></i> Me gusta <span id="badge-{this.props.id}" className="badge badge-success">{this.props.likes}</span></button>
        </div>
      </div>
    )
  }
}

export default Post;
