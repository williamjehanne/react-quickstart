var App = React.createClass({
    getDefaultProps:function(){
        return {
            txt: 'this is a default prop',
            cat: 0
        }
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
            <h1>Hello world !</h1>
        </div>
        )
    }
});

React.render(<App cat={5} txt="this is the props txt" />, document.body);