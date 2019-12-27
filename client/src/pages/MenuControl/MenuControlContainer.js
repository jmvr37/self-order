import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data'
import { withTracker } from 'meteor/react-meteor-data';
// import ItemCard from '../../components/ItemCard/';
import TableNumber from '../../components/TableNumber/';
import { Grid, Button, Item, Modal } from 'semantic-ui-react';
import NavBar from '../../components/NavBar/NavBar';
import { Menu } from '/imports/api/collections/menu';
import OrderId from '../../components/OrderId';
import AddItemForm from '../../components/AddItemForm'
import "./styles.css";
import MenuControl from './MenuControl';

// const menuItems = require('./menu.json');
const MenuControlContainer = ({menu, ...props}) => {
    const [ open, setOpen ] = useState(false)
    const onAddItemnModal = () => {
        setOpen(true)
    }
    const onClose = (close) => {
        console.log('onclose' + close)
        setOpen(close)
    } 
    const addItem = () => {
        Meteor.call('menu.insert', item )
    }
    return (
        <div>
          <h1>Menu Control Panel</h1>
          <Button onClick={onAddItemnModal}>Add an item +</Button>
          <Modal dimmer='blurring' open={open} onClose={onClose} className="addItemForm">
            <AddItemForm closeModal={onClose}/>
          </Modal>
            <div className="orderContent">
            </div>
            <Item.Group divided>
                {menu.map((item) => (
                    <MenuControl item={item} key={item.name} />
                ))}
            </ Item.Group>
            <Button onClick={onAddItemnModal}>Add an item +</Button>
            <br />
            <br />
            <br />
            <br />
            {/* <NavBar /> */}
        </div>
    )
}

//withTracker tacks changes in database
export default withTracker(() => {
    //subscribe the 'menu' collection from mongodb
    Meteor.subscribe('menu')
    const menu = Menu.find({}).fetch()
    return { //return an object
        menu
    }
})(MenuControlContainer) //send the object to MenuConatiner as props