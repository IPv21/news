import React from 'react'
import demoImg from '../assets/images/demo.jpg'
import './NewsModal.css'

const NewsModal = ({ show, article, onClose }) => {

    if(!show) {
        return null
    } else {
        return (
            <div className='modal-overlay'>
                <div className='modal-content'>
                    <span className='close-button' onClick={onClose}>
                        <i className="i fa-solid fa-xmark"></i>
                    </span>
                    <img src={article.image} alt="Modal Image"  className='modal-image'/>
                    <h2 className='modal-title'>{article.title}</h2>
                    <p className='modal-source'>Source {article.source.name} </p>
                    <p className='modal-date'>Published on {article.publishedAt}</p>
                    <p className='modal-content-text'>{article.content}</p>
                    <a href={article.url} className='read-more-link'>Read More</a>
                </div>
            </div>
        )
    }
    
  // return (
  //   <div className='modal-overlay'>
  //     <div className='modal-content'>
  //       <span className='close-button'>
  //           <i className="i fa-solid fa-xmark"></i>
  //       </span>
  //       <img src={demoImg} alt="Modal Image"  className='modal-image'/>
  //       <h2 className='modal-title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consectetur !</h2>
  //       <p className='modal-source'>Source The Guardian </p>
  //       <p className='modal-date'>Published on 2021-09-01</p>
  //       <p className='modal-content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
  //       <a href="#" className='read-more-link'>Read More</a>
  //       </div>
  //   </div>
  // )
}

export default NewsModal
