import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './redux'
import Heading from './Heading'
import Ticket from './Ticket'


const Main = () => {
    // const loading = useSelector(state => state.loading)
    
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const groupOrder = useSelector(state => state.display)
    
    const theme = useSelector(state => state.theme)
    const [show, setShow] = useState({})

    let backgroundColor = theme === "LIGHT"? "#ffff" : '#161B22'

    function showSet() {
        var groupedData;
        if(data) {
            
            switch (groupOrder.grouping) {
                case 'PRIORITY':
                    groupedData = data.reduce((result, currentObject) => {
                        const key = currentObject.priority;
                        result[key] = result[key] || [];
                        result[key].push(currentObject);
                        return result;
                    }, {});
                    break;
                case 'STATUS':
                    groupedData = data.reduce((result, currentObject) => {
                        const key = currentObject.status;
                        result[key] = result[key] || [];
                        result[key].push(currentObject);
                        return result;
                    }, {});
                        groupedData['Done'] = [];
                        groupedData['Cancelled'] = [];
                    break;
                case 'USER':
                    groupedData = data.reduce((result, currentObject) => {
                        const key = currentObject.name;
                        result[key] = result[key] || [];
                        result[key].push(currentObject);
                        return result;
                    }, {});
                    break;
                default:
                    break;
            }   

            // change state
            setShow(groupedData)
        }
    }
    
    useEffect(() => {
        dispatch(fetchData())
    }, [])


    useEffect(() => {
        showSet()
    }, [groupOrder])

    // console.log(show)
    
    // if(show && groupOrder.grouping !== "PRIORITY") {
    //     Object.entries(data).sort((a, b) => a[1].length - b[1].length)
    // }

    return (
        <div style={{backgroundColor: backgroundColor, minHeight:"92vh"}}>
            <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {
                Object.entries(show).map(([key, taskGroup], index) => (
                    
                    groupOrder.ordering === "TITLE" && taskGroup.sort((a, b) => a.title.localeCompare(b.title)),
                    
                    <div key={index} className="m-2 grid-cols-1">
                        <Heading props={{key: key, total: taskGroup.length}}/>
                        {taskGroup.map((task, id) => (
                            <Ticket key={id} props={task}/>
                        ))}
                    </div>

                ))
            }
            </div>
        </div>
    )
}   

export default Main
