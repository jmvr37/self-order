import React, { Component } from "react";
import styles from "./styles";
import { Button, Icon, Card, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class OrderCard extends Component {
  render() {
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>Dim-Sum bbq</Card.Header>
            <Card.Meta>3 pieces</Card.Meta>
            <Card.Description>
              Beef Balls. Seasoned ground or minced beef, placed on bean curd
              skins and steamed
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="red">
                <Icon name="trash alternate outline" size="large" />
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/molly.png"
            />
            <Card.Header>Egg Custard</Card.Header>
            <Card.Meta>4 pieces</Card.Meta>
            <Card.Description>
              A steamed custard that may include meat or seafood.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="red">
                <Icon name="trash alternate outline" size="large" />
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}
export default OrderCard;
