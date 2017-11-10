import React, { Component } from 'react';

import './Modal.css';

export default class Modal extends Component {
    closeModal() {
        const { onCancel } = this.props;
        if (onCancel)
            onCancel();
    }
    confirmModal() {
        const { onOk } = this.props;
        if (onOk)
            onOk();
    }
    render() {
        const { title, children, footer, visible} = this.props;
        if (!visible)
            return null;
        return(
            <div>
                <div className="mask" onClick={() => this.closeModal()}>
                </div>
                <div className="modal">
                    {title ? <section className="modal-header">
                        <h3>
                            {title}
                        </h3>
                    </section> : null}
                    <div className="modal-body">
                        {children}
                    </div>
                    {footer ? <div className="modal-footer">
                        {footer}
                    </div> : null}
                    <div className="modal-actions">
                        <button className="button button-primary" onClick={() => this.confirmModal()}>Delete</button>
                        <button className="button button-alt" onClick={() => this.closeModal()}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
