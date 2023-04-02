import React from 'react'

function Product(props) {
    return (
        <div className="product">
            <div className="product__img">
                <img src={props.image} alt="" />

                <button className="product__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" /></svg></button>
            </div>
            <h3 className="product__title"><a href="product.html">{props.name}</a></h3>
            <span className="product__price">${props.price}</span>
            {props.new ?
                <>
                    <span className="product__new">New</span>
                </>
                : ''}

        </div>
    )
}

export default Product