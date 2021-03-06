/**
 * Created by williamjehanne on 07/12/15.
 */
var App = React.createClass({
    getInitialState:function(){
        return {increasing:false}
    },
    update:function(){
        var newVal = this.props.val+1
        this.setProps({val:newVal})
    },
    componentWillReceiveProps:function(nextProps){
        this.setState({increasing:nextProps.val>this.props.val})
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    },
    componentWillUpdate: function(nextProps, nextState) {
        console.log("nextProps ===" + JSON.stringify(nextProps))
    },
    render:function(){
        console.log(this.state.increasing)
        return (
            <button
            onClick={this.update}>
            {this.props.val}
            </button>
        )
    },
    componentDidUpdate: function(prevProps, prevState) {
        console.log("prevProps ===" + JSON.stringify(prevProps))
    }
});

React.render(<App val={0} />, document.body)