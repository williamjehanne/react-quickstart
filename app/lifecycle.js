/**
 * Created by williamjehanne on 06/12/15.
 */
var App = React.createClass({
    update: function(){
        var newVal = this.props.val+1;
        this.setProps({val:newVal})
    },
    componentWillMount:function(){
        this.setState({m:2});
        if(this.props.val===0){
            this.btnStyle = {'color': 'red'}
        }
    },
    render: function(){
        console.log("hello world");
        return <button
            style={this.btnStyle}
            onClick={this.update}>
            {this.props.val*this.state.m}
        </button>
    },
    componentDidMount:function(){
        this.inc = setInterval(this.update, 500)
    },
    componentWillUnMout:function(){
        console.log("goodbye curl world !");
        clearInterval(this.inc)
    }
});

window.render = function(){
    React.renderComponent(<App val={0} />, document.getElementById('panel'));
}

window.unmount = function(){
    React.unmountComponentAtNode(document.getElementById('panel'));
}
