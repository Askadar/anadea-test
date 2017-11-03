import React from 'react';

import './Drawer.css';

const DrawerSection = ({children, primary}) =>
<section className={`drawer-section ${primary && 'drawer-section--primary'}`}>
    {children}
</section>

const DrawerHeader = ({children}) =>
<section className="drawer-section--row drawer-header">
    <h3>{children}</h3>
</section>

const DrawerInput = ({children}) =>
<section className="drawer-section--row drawer-input">
    {children}
</section>

const DrawerText = ({children}) =>
<section className="drawer-section--row drawer-text">
    {children}
</section>

const DrawerTaskExplanation = ({children}) =>
<section className="drawer-section--row drawer-text drawer-text--explanation">
    {children}
</section>

const DrawerAction = ({children}) =>
<section className="drawer-section--row drawer-action">
    <button className="button button-primary">{children}</button>
</section>

const DrawerIconSelect = ({children}) =>
<section className="drawer-section--row drawer-action">
    <select>{children}</select>
</section>
const DrawerTagSelect = ({children}) =>
<section className="drawer-section--row drawer-action">
    <select>{children}</select>
</section>

const Drawer = () =>
<div className="drawer">
    <DrawerSection primary>
        <DrawerHeader>New Task</DrawerHeader>
        <DrawerTaskExplanation>I need <b>{'a plumber'}</b> to <b>{'plumber my bumber'}</b>, <b>{'it\'s getting stuck all the tiiiime'}</b></DrawerTaskExplanation>
        <DrawerText>Addresse</DrawerText>
        <DrawerAction>Create Task</DrawerAction>
    </DrawerSection>
    <DrawerSection>
        <DrawerHeader>Location</DrawerHeader>
        <DrawerText>Reall addresse</DrawerText>
    </DrawerSection>
    <DrawerSection>
        <DrawerHeader>Service type</DrawerHeader>
        <DrawerIconSelect>Reall addresse</DrawerIconSelect>
    </DrawerSection>
    <DrawerSection>
        <DrawerHeader>{'Plubmer'} task</DrawerHeader>
        <DrawerTagSelect>Reall addresse</DrawerTagSelect>
    </DrawerSection>
    <DrawerSection>
        <DrawerHeader>Task description</DrawerHeader>
        <DrawerInput>it's getting stuck all the tiiiime</DrawerInput>
    </DrawerSection>
</div>

export default Drawer;
