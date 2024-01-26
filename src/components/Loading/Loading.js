const Loading = ({ message }) => {
    return (
        <div style={{textAlign: 'center'}}>
            <div className='loader'></div>
            <p>Sending...</p>
        </div>
    )
}

export default Loading;