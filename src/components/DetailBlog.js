import { useParams, useHistory } from "react-router-dom";
const DetailBlog = () => {
    let {id} = useParams();
    let history = useHistory();
    const handleBackData = () => {
        history.push('/blog')
    }
    return (
        <>
            <div><span onClick={handleBackData} style={{cursor: 'pointer'}}>&lt;-- Back</span></div>
            <div>Blog id = {id}</div>
        </>
        
    )
}

export default DetailBlog;

