import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    //no se debe colocar la ejecución de una función dentro del fcomponent
    //porque cada vez que se renderiza el fcomponent, se ejecutaría la función
    //y en este caso ejecuta la petición htpp

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}//se utiliza para esparcir las props
                        />
                    ))
                }
            </div>
        </>
    )
}