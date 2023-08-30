import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    //useEffect sirve para dispara efectos secundarios, es decir un proceso
    //que se quiera ejecutar cuando algo sucede

    useEffect(() => {
        getImages();
    }, []);

    return {
        images, //cuando se tiene una llave que apunta a una variable
        //con ese mismo nombre images: images, se puede dejar solo images
        isLoading
    }
}
