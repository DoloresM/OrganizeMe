

const Task = ()=>{
    return (
        <>
            <div className="content">
                <h1>Task</h1>
                <form name="task" className="taskList">
                    <div className="task"><label for="title">Title: </label><input type="text" name="title"/></div>
                    <div className="task"><label for="title">Start Date: </label><input type="text" name="title"/></div>
                    <div className="task"><label for="title">Due Date: </label><input type="text" name="title"/></div>
                    <div className="task"><label for="title">Description: </label><input type="textarea" name="title"/></div>
                    <div className="task"><label for="title">Location: </label><input type="textarea" name="title"/></div>
                    <div className="tasks"> <label for="title">Requirements: </label><input type="text" name="title"/></div>
                    <div className="tasks"><label for="title">Add Task: </label><input type="text" name="title"/></div>
                    <div className="tasks"><label for="title">View List: </label><input type="text" name="title"/></div>
                    <div className="tasks"><label for="title">Add Alert: </label><input type="text" name="title"/></div> 
                </form>
            </div>
        </>
    )
}

export default  Task;