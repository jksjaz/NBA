import React from "react"
import { connect } from "react-redux"
import { updatePlayer } from "../../../API/api"


class Modal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            team: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value.trim()
        const team = e.target.team.value
        const updates = { name, team, id: this.props.edit.id }

        updatePlayer(updates)

        document.getElementById("close-button").click()
    }

    componentDidUpdate(prevProps) {
        if (this.props.edit !== prevProps.edit) {
            this.setState({ name: this.props.edit.name })
        }
    }
    
    renderOptions() {
        return this.props.teams.map(team => {
            return <option key={team.id} value={team.id}>{team.name}</option>
        })
    }

    render() {
        return (
            <div className="modal fade" id="edit-modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" id="close-button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Player Name</label>
                                    <input className="form-control" name="name" value={this.state.name}
                                    onChange={e => this.setState({ name: e.target.value })}/>
                                </div>
                                <div className="form-group">
                                    <label>Team</label>
                                    <select className="form-control" name="team">
                                        {this.renderOptions()}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    edit: state.reducer.edit,
    teams: state.reducer.teams
})

export default connect(mapStateToProps)(Modal)