import axios from 'axios';
import { useState } from 'react';
import './Blog.css'

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmitButton = async () => {
        if (!title) {
            alert('empty title!');
            return;
        }
        if (!content) {
            alert('empty content!');
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlogs = res.data;
            props.handleAddNew(newBlogs);
            console.log(newBlogs);
        }
        
    }
    return (
        <div className="add-new-container">
            <div className="text-add-new">---Add New Blog---</div>
            <div className='inputs-data'>
                <label>Title: </label>
                <input type="text" value={title} 
                    onChange={event => {setTitle(event.target.value)}}/>
            </div>
            <div className='inputs-data'>
                <label>Content: </label>
                <input type="text" value={content}
                    onChange={event => {setContent(event.target.value)}}/>
            </div>
            <button className='btn-add-new' onClick={handleSubmitButton}>Submit</button>
        </div>
    )
}

export default AddNewBlog;