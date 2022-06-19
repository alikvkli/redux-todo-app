const Error = ({message})=>{
    return (
        <div style={{fontSize:15,padding:15,textAlign:'center',color: 'red'}}>
            {message === 'Failed to fetch' ? 'Api ile bağlantı kurulamadı' : message}
        </div>
    )
}

export default Error;