import {useState, useEffect} from 'react'
//import getItem from '../GetItem'
import ItemList from '../ItemList'
import {getFirestore} from '../firebase'
import { useParams } from 'react-router-dom'

const ItemDetailContainer =() =>{


    const [data, setData]=useState([])
    //const {id } = useParams()


    useEffect(() => {
        const db = getFirestore()
        const reunionesCollection = db.collection('reuniones')
        const query = reunionesCollection.get()

        query.then((respuesta) => {
            setData(respuesta.docs.map((doc)=> 
                [({...doc.data(), id: doc.id})]
                ))
                
            })
            console.log('setdata', data)
        // const query = idReunion ? reunionesCollection.where('idReunion', '==', idReunion) : reunionesCollection

        // query.get().then((querySnap) => {
        //     if(querySnap.size === 0){
        //         console.log("no existen reuniones disponibles");
        //     }

        //     setData(querySnap.docs.map( doc => ({...doc.data(), id: doc.id})));
        }, [data.id])
console.log('data', data)
    return(
        <ItemList data={data}/>
    )
}

export default ItemDetailContainer