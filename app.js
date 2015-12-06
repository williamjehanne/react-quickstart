var App = React.createClass({
    getDefaultProps:function(){
        return {
            txt: 'this is a default prop',
            cat: 0
        }
    },
    getInitialState:function(){
        return {
            montxt: 'the state txt',
            id: 0
        }
    },
    update: function(e) {
        this.setState({montxt: e.target.value});
    },
    propTypes: {
        txt: React.PropTypes.string,
        cat: React.PropTypes.number.isRequired
    },
    render: function(){
        var txt = this.props.txt;
        return (
            <div>
                <b>{txt}</b>
                <Widget montxt={this.state.montxt} update={this.update}/>
            </div>
        )
    }
});

var Widget = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Hello world !</h1>
                <input type="text" onChange={this.props.update}></input>
                <h1>{this.props.montxt}</h1>
            </div>
        )
    }
})

React.render(<App cat={5} txt="this is the props txt" />, document.body);