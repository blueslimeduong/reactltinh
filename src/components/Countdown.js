import React from "react";
import { useState, useEffect } from "react";
class CountDown extends React.Component {
    state = {
        count: 10
    }
    
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state.count && this.state.count === 0) {
            if (this.timer ) {
                clearInterval(this.timer );
                this.props.onTimesup();
            }
        }
    }
    render() {
        return (
            <div>{this.state.count} class</div>
        )
    }
}


const NewCountDown = (props) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count === 0) {
            // props.onTimesup();
            return;
        }

        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        }

        // setTimeout(() => {
            
        //     setCount(count - 1);
        // }, 1000)
    }, [count]);

    return (
        <div>{count} hooks</div>
    )
}

export {NewCountDown, CountDown};