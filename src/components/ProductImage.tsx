import React, { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";

// import noImage from '../assets/no-image.jpg'; 

import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';

export interface PropsImage {
    className?: string;
    img?: string; 
    style?: CSSProperties;
}

export const ProductImage = ( {img, className, style }: PropsImage )=>{

    const { product } = useContext(productContext);

    let imgToShow: string;

    if( img ){
        imgToShow = img;
    }else if ( product.img ){
        imgToShow = product.img
    }else {
        imgToShow = noImage; 
    }

    return(
        <img 
            className={ `${ styles.productImg } ${ className }` } 
            src={ imgToShow } 
            alt="Product img"
            style={ style }
        />
    )
};