import React from 'react'
import { useSelector } from 'react-redux'
import { Addition, BackLog, Cancelled, Done, High, InProgress, Low, Medium, NoPriority, ThreeDots, Todo, Urgent } from './Icons'

const Heading = ({props}) => {
    const groupOrder = useSelector(state => state.display)
    const theme = useSelector(state => state.theme)
    const key = props.key
    const total = props.total
    
    let short = key
    let words = short.split(' ');
    let initials = words.map(word => word.charAt(0).toUpperCase());

    const result = initials.join('');
    const textColor = theme === "LIGHT" ? 'black' : "white"

    switch(groupOrder.grouping) {
        case "PRIORITY":
          return (
            <div style={{ 
                color: textColor,
                display: "flex", 
                justifyContent: "space-between",
                alignItems: "center",
                height: "8vh",
                padding: "0 0.4rem" }}>
    
                <span className='flex' 
                style={{ 
                padding: "0.25vh",
                alignItems: "center",
                width: "fit-content",
                marginTop: "1vh",
                border: theme === "LIGHT" ? "1px solid #e6e7eb" : "1px solid rgb(74, 74, 74)"
                }}>
                    {key === "0" && <NoPriority />}
                    {key === "1" && <Low />}
                    {key === "2" && <Medium />}
                    {key === "3" && <High />}
                    {key === "4" && <Urgent />}
                </span>
    
                {key === "0" && <p>NoPriority ({total})</p>}
                {key === "1" && <p>Low ({total})</p>}
                {key === "2" && <p>Medium ({total})</p>}
                {key === "3" && <p>High ({total})</p>}
                {key === "4" && <p>Urgent ({total})</p>}
    
                <div className='flex gap-1'>
                    <Addition />
                    <ThreeDots />
                </div>
            </div>
          )
        
        case "STATUS": 
          return (
            <div style={{ 
                color: textColor,
                display: "flex", 
                justifyContent: "space-between",
                alignItems: "center",
                height: "8vh",
                padding: "0 0.4rem" }}>
    
                <span className='flex'>
                    {key === "Todo" && <Todo />}
                    {key === "Backlog" && <BackLog />}
                    {key === "In progress" && <InProgress />}
                    {key === "Done" && <Done />}
                    {key === "Cancelled" && <Cancelled />}
                </span>
    
                
                {key} ({total})
    
                <div className='flex gap-1'>
                    <Addition />
                    <ThreeDots />
                </div>
            </div>
          )
        
        case "USER":
          return (
            <div style={{ 
                color: textColor,
                display: "flex", 
                justifyContent: "space-between",
                alignItems: "center",
                height: "8vh",
                padding: "0 0.4rem" }}>

                <div style={{
                    backgroundColor: theme === "DARK" ? "rgb(144, 12, 63)" : "rgb(150, 102, 163)",
                    textAlign: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius:"50%",
                    fontSize: "0.5rem",
                    fontWeight: "400",
                }}>{result}</div>

                
                <span className='flex'>
                    {key} ({total})
                </span>
                
    
                <div className='flex gap-1'>
                    <Addition />
                    <ThreeDots />
                </div>
            </div>
          )
        default: return(<></>)
    }
}

export default Heading