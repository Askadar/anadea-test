import React from 'react';

import './Drawer.css';

const DrawerSection = ({children, primary}) =>
<section className={`drawer-section${primary ? ' drawer-section--primary' : ''}`}>
    {children}
</section>

const DrawerHeader = ({children}) =>
<section className="drawer-section--row drawer-header">
    <h3>{children}</h3>
</section>

const DrawerInput = ({children, updateDescription, text, style}) =>
<section className="drawer-section--row drawer-input">
    <input type="text"
        placeholder={children}
        style={style}
        value={text}
        onChange={
            (evt) => console.log(evt.target.value) || updateDescription(evt.target.value)
        }
    />
</section>

const DrawerText = ({children}) =>
<section className="drawer-section--row drawer-text">
    {children}
</section>

const DrawerTaskExplanation = ({ who, to, why }) =>
<section className="drawer-section--row drawer-text drawer-text--explanation">
    <span>I need a </span>
    <span>
        <b>{who}</b>
        {who ? ' to ' : '...'}
    </span>
    <span>
        <b>{who ? to : ''}</b>
        {who && to && why ? ', ' : ''}
    </span>
    <span>
        <b>{who && to ? why : ''}</b>
        {who && to && why ? '.' : ''}
    </span>
</section>

const DrawerAction = ({children, className, style, ...rest}) =>
<section className={`drawer-section--row drawer-action ${className}`} style={style}>
    <button className="button button-primary" {...rest}>{children}</button>
</section>

const DrawerValidation = ({active, warnings, errors}) =>
{
    if (active)
        return (
            <div className="drawer-validation">
                {Object.keys(errors).length > 0 && <div className="drawer-validation--errors">
                    {Object.keys(errors).map(key => <p key={key}>{errors[key]}</p>)}
                </div>}
                {Object.keys(warnings).length > 0 && <div className="drawer-validation--warnings">
                    {Object.keys(warnings).map(key => <p key={key}>{warnings[key]}</p>)}
                </div>}
            </div>
        );
    return null;
}

const DrawerIconSelect = ({ available, activeType, selectType }) =>
<section
    className="drawer-section--row drawer-select">
    {
        available.map(({ label, iconUrl}) =>
        <div key={label}
            onClick={evt => selectType(label)}
            className={`drawer-select--icon${label === activeType ? ' active' : ''}`}>
            <div className="img"><img src={iconUrl} alt=""/></div>
            <span>{label}</span>
        </div>)
    }
</section>

const DrawerTagSelect = ({available, activeTask, selectTask}) =>
<section className="drawer-section--row drawer-select">
    {
        available.map((label) =>
        <span key={label}
            onClick={evt => selectTask(label)}
            className={`drawer-select--tag${label === activeTask ? ' active' : ''}`}
            >
            {label}
        </span>)
    }
</section>

const Drawer = ({
    active, editing,
    address,
    type, task, description,
    validateAndDispatch, validation, validated,
    availableTasks }) =>
<div className={`drawer${active ? ' active' : ''}`}>
    <DrawerSection primary>
        <DrawerHeader>New Task</DrawerHeader>
        <DrawerTaskExplanation
            who={type.activeType}
            to={task.activeTask}
            why={description.text}
        />
        <DrawerValidation
            active={!validated}
            errors={validation.validationErrors}
            warnings={validation.validationWarnings}/>
        <DrawerText>My address is {address}</DrawerText>
        <DrawerAction onClick={() => editing ? validateAndDispatch(editing) : validateAndDispatch()}>{editing ? 'Edit task' : 'Create Task'}</DrawerAction>
    </DrawerSection>
    <DrawerSection>
        <DrawerHeader>Location</DrawerHeader>
        <DrawerText>{address}</DrawerText>
    </DrawerSection>
    <DrawerSection>
        <DrawerHeader>Service type</DrawerHeader>
        <DrawerIconSelect
            available={[
                { label: 'Electrician', iconUrl: '/assets/icons/noun_321339_cc.svg' },
                { label: 'Plumber', iconUrl: '/assets/icons/noun_321315_cc.svg' },
                { label: 'Gardener', iconUrl: '/assets/icons/noun_321363_cc.svg' },
                { label: 'Housekeeper', iconUrl: '/assets/icons/noun_321399_cc.svg' },
                { label: 'Cook', iconUrl: '/assets/icons/noun_321395_cc.svg' }
            ]}
            {...type}
        />
    </DrawerSection>
    <DrawerSection>
        <DrawerHeader>{`${type.activeType || 'Select specialist type to view available'} tasks`}</DrawerHeader>
        <DrawerTagSelect
                available={availableTasks[type.activeType] || []}
                {...task}
        />
    </DrawerSection>
    <DrawerSection>
        <DrawerHeader>Task description</DrawerHeader>
        <DrawerInput {...description}>Because ...</DrawerInput>
    </DrawerSection>
</div>

export default Drawer;
