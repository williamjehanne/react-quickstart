/**
 * Created by williamjehanne on 06/12/15.
 */
var App = React.createClass({
    render: function(){
        return (
            <div>
                <BButton className="btn-primary">
                    <BIcon className="glyphicon-heart"/> Button
                </BButton>
                <BButton className="btn-success">
                    <BIcon className="glyphicon-pencil"/> Button
                </BButton>
                <BButton className="btn-danger">
                    <BIcon className="glyphicon-inbox"/> Button
                </BButton>
            </div>
        )
    }
});

var BButton = React.createClass({
    render: function(){
        return this.transferPropsTo(
            <a className="btn">{this.props.children}</a>
        )
    }
});

var BIcon = React.createClass({
    render: function () {
        return this.transferPropsTo(<span className="glyphicon"></span>)
    }
});

React.render(<App />, document.body);