import React,{Component} from 'react';
export default class Note extends Component{
    clickHandler(id){
       
        this.props.onRemove(id)

    }
    render(){
     
        return(
            <div onClick={this.clickHandler.bind(this,this.props.id)} className="tasks" style={{padding:"20px",display:"inline-flex",width:'max-content',borderRadius:'10px', height:'100px',textWrap:'wrap',backgroundColor:this.props.color,}}>
                <p   className='card-text ' style={{margin:''}}> {this.props.noteTitle}</p>
  
            
            </div>

        )
    }
}