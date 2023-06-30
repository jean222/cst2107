import './style.css'

const GryffProfileCard = (props) => {

    // return <div style={{background: "#fff", boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
    return <div className="students-container">
        <img src={props.data.image} />
        <p style={{fontSize:'20px'}} ><b>{props.data.name}</b></p>
        <p >{props.data.ancestry}</p>

    </div>
}

export default GryffProfileCard