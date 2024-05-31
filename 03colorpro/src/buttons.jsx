function But(props){
    return(
        <>
           <button className='outline-none px-4 py-2 rounded-full font-bold shadow-xl'
            style={{backgroundColor: props.color , color: props.textcolor}}>
             {props.color}
            </button>
        </>
    )
}

export default But