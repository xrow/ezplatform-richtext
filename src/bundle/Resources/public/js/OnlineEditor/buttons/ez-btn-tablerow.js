import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlloyEditor from 'alloyeditor';

export default class EzBtnTableRow extends AlloyEditor.ButtonTableRow {
    static get key() {
        return 'eztablerow';
    }

    render() {
        let buttonCommandsList;
        let buttonCommandsListId;

        if (this.props.expanded) {
            buttonCommandsListId = 'tableRowList';
            buttonCommandsList = (
                <AlloyEditor.ButtonCommandsList
                    commands={this._getCommands()}
                    editor={this.props.editor}
                    listId={buttonCommandsListId}
                    onDismiss={this.props.toggleDropdown}
                />
            );
        }

        return (
            <div className="ae-container ae-has-dropdown">
                <button
                    aria-expanded={this.props.expanded}
                    aria-label={AlloyEditor.Strings.row}
                    aria-owns={buttonCommandsListId}
                    className="ae-button ez-btn-ae"
                    onClick={this.props.toggleDropdown}
                    role="combobox"
                    tabIndex={this.props.tabIndex}
                    title={AlloyEditor.Strings.row}>
                    <svg className="ez-icon ez-btn-ae__icon">
                        <use xlinkHref={window.eZ.helpers.icon.getIconPath('table-row')} />
                    </svg>
                </button>
                {buttonCommandsList}
            </div>
        );
    }
}

AlloyEditor.Buttons[EzBtnTableRow.key] = AlloyEditor.EzBtnTableRow = EzBtnTableRow;

const eZ = (window.eZ = window.eZ || {});

eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnTableRow = EzBtnTableRow;
