import React from 'react'
import { useSelector } from 'react-redux'
import { BackLog, Cancelled, Done, GrayCircle, High, InProgress, Low, Medium, NoPriority, Todo, Urgent } from './Icons'

const Ticket = (props) => {
  const groupOrder = useSelector(state => state.display)
  const theme = useSelector(state => state.theme)

  let backgroundColor = theme === "LIGHT"? "#ffff" : '#161B22'
  let textColor = theme === "LIGHT" ? 'black' : "#ebebeb"

  // Initial Letters
  let short = props.props.name 
  let words = short.split(' ');
  let initials = words.map(word => word.charAt(0).toUpperCase());

  const result = initials.join('');
  // console.log(result)

  // props.props
  switch(groupOrder.grouping) {
    case "PRIORITY":
      return (
        <div style={{ color: textColor, marginTop:"1.5vh",            
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "0.8rem 1.2rem",
            width: "100%",
            borderRadius: "6px",
            backgroundColor: backgroundColor,
            boxShadow: "0px 0px 8px 0px #0000001a",
            border:theme === "LIGHT" ? "1px solid #e6e7eb" : "1px solid rgb(74, 74, 74)"
          }}>
          <div style={{display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            }}>
            <span>{props.props.id}</span>

            <div>
              
              <div 
                style={{
                  backgroundColor: theme === "DARK" ? "rgb(144, 12, 63)" : "rgb(150, 102, 163)",
                  textAlign: "center",
                  width: "25px",
                  height: "25px",
                  borderRadius:"50%",
                  fontSize: "0.5rem",
                  fontWeight: "400",
                  position: "relative",
              }}>{result}</div>
              <div style=
                {{
                  backgroundColor: "rgb(236, 194, 56)",
                  position: "absolute",
                  bottom: "0px",
                  right: "0px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  outline: "1px solid white"
                }}>

              </div>
            </div>

          </div>

          <div 
            className='flex gap-2'
            >
            <div className='mt-1'>

            {props.props.status === "In progress" && <InProgress /> }
            {props.props.status === "Backlog" && <BackLog />}
            {props.props.status === "Todo" && <Todo />}
            {props.props.status === "Done" && <Done />}
            {props.props.status === "Cancelled" && <Cancelled />}
          
            
            </div>
            <div>
              <p>{props.props.title}</p>
            </div>
          </div>
          
          <div className='flex gap-2' 
            style={{ 
                  gap: "5px",
                  alignItems: "center",
                  width: "fit-content",
                  padding: "0.10vh",
                  border: theme === "LIGHT" ? "1px solid #e6e7eb" : "1px solid rgb(74, 74, 74)"}}>
            <GrayCircle />
            <span>{props.props.tag[0]}</span>
          </div>

        </div>
      )
    
    case "STATUS": 
      return (
        <div style={{ color: textColor, marginTop:"1.5vh",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "0.8rem 1.2rem",
            width: "100%",
            borderRadius: "6px",
            backgroundColor: backgroundColor,
            boxShadow: "0px 0px 8px 0px #0000001a",
            border:theme === "LIGHT" ? "1px solid #e6e7eb" : "1px solid rgb(74, 74, 74)"
          }}>
          <div style={{display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            }}>
            <span>{props.props.id}</span>

            <div>
              
              <div 
                style={{
                  backgroundColor: theme === "DARK" ? "rgb(144, 12, 63)" : "rgb(150, 102, 163)",
                  textAlign: "center",
                  width: "25px",
                  height: "25px",
                  borderRadius:"50%",
                  fontSize: "0.5rem",
                  fontWeight: "400",
                  position: "relative",
              }}>{result}</div>
              <div style=
                {{
                  backgroundColor: "rgb(236, 194, 56)",
                  position: "absolute",
                  bottom: "0px",
                  right: "0px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  outline: "1px solid white"
                }}>

              </div>
            </div>

          </div>

          <div className='flex gap-2'>
            <div>
              <p>{props.props.title}</p>
            </div>
          </div>
          
          <div className='flex gap-2'>
            <div
              style={{ 
                padding: "0.25vh",
                alignItems: "center",
                width: "fit-content",
                marginTop: "1vh",
                border: theme === "LIGHT" ? "1px solid #e6e7eb" : "1px solid rgb(74, 74, 74)"
                }}>

              {props.props.priority === 0 && <NoPriority />}
              {props.props.priority === 1 && <Low />}
              {props.props.priority === 2 && <Medium />}
              {props.props.priority === 3 && <High />}
              {props.props.priority === 4 && <Urgent />}
            </div>

            <div className='flex gap-2' style={{
                marginTop: '0.5vh',
                alignItems: "center",
                width: "fit-content",
                padding: "0.10vh",
                border: theme === "LIGHT" ? "1px solid #e6e7eb" : "1px solid rgb(74, 74, 74)"}}>
              <GrayCircle />
              <span>{props.props.tag[0]}</span>
            </div>
          </div>

        </div>
      )
    
    case "USER":
      return (
        <div style={{ color: textColor,marginTop:"1.5vh", 
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "0.8rem 1.2rem",
            width: "100%",
            borderRadius: "6px",
            backgroundColor: backgroundColor,
            boxShadow: "0px 0px 8px 0px #0000001a",
            border:theme === "LIGHT" ? "1px solid #e6e7eb" : "1px solid rgb(74, 74, 74)"
          }}>
          <div style={{display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            }}>
            <span>{props.props.id}</span>

            

          </div>

          <div 
            className='flex gap-2'
            >
            <div className='mt-1'>

            {props.props.status === "In progress" && <InProgress /> }
            {props.props.status === "Backlog" && <BackLog />}
            {props.props.status === "Todo" && <Todo />}
            {props.props.status === "Done" && <Done />}
            {props.props.status === "Cancelled" && <Cancelled />}
          
            
            </div>
            <div>
              <p>{props.props.title}</p>
            </div>
          </div>
          
          
          <div className='flex gap-2'>
            <div
              style={{ 
                padding: "0.25vh",
                alignItems: "center",
                width: "fit-content",
                marginTop: "1vh",
                border: theme === "LIGHT" ? "1px solid #e6e7eb" : "1px solid rgb(74, 74, 74)"
                }}>

              {props.props.priority === 0 && <NoPriority />}
              {props.props.priority === 1 && <Low />}
              {props.props.priority === 2 && <Medium />}
              {props.props.priority === 3 && <High />}
              {props.props.priority === 4 && <Urgent />}
            </div>

            <div className='flex gap-2' style={{
                marginTop: '0.7vh',
                alignItems: "center",
                width: "fit-content",
                padding: "0.05vh",
                border: theme === "LIGHT" ? "1px solid #e6e7eb" : "1px solid rgb(74, 74, 74)"}}>
              <GrayCircle />
              <span>{props.props.tag[0]}</span>
            </div>
          </div>
          

        </div>
      )
    default: return(<></>)
  }

}

export default Ticket