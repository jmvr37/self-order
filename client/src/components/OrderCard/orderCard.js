import React, { Component } from "react";
import {
  Button,
  Icon,
  Card,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import "./styles.css";

const OrderCard = () => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg"
          />
          <Card.Header>Dim-Sum bbq</Card.Header>
          <Card.Meta>3 pieces</Card.Meta>
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
            className="img"
            floated="right"
            size="mini"
            src="http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-steamed-pork-dumplings-thumb.jpg"
          />
          <Card.Header>Egg Custard</Card.Header>
          <Card.Meta>4 pieces</Card.Meta>
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
};

export default OrderCard;
