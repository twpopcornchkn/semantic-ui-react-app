import React from 'react';
import {Button,
    Container,
    Icon,
    Image,
    Item,
    Label} from 'semantic-ui-react';

const jobs = (props) =>(
<Container>
      <Item.Group divided>
        <Item>
          <Item.Image src='https://i.imgur.com/JDC1Kfu.png' />
          <Item.Content>
            <Item.Header as='a'>Job #1</Item.Header>
            <Item.Meta>
              <span>1998.1.2</span>
              <span>Design</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Image avatar circular src='https://i.imgur.com/JDC1Kfu.png' />
              Username
              <Button floated='right' primary>
                Apply
                <Icon name='chevron right' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src='https://i.imgur.com/JDC1Kfu.png' />
          <Item.Content>
            <Item.Header as='a'>Job #2</Item.Header>
            <Item.Meta>
              <span>1998.1.3</span>
              <span>Software Engineer</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Button floated='right' primary>
                Apply
                <Icon name='chevron right' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src='https://i.imgur.com/JDC1Kfu.png' />
          <Item.Content>
            <Item.Header as='a'>Job #3</Item.Header>
            <Item.Meta>
              <span>1998.1.4</span>
              <span>Design</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                Apply
                <Icon name='chevron right' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src='https://i.imgur.com/JDC1Kfu.png' />
          <Item.Content>
            <Item.Header as='a'>Job #4</Item.Header>
            <Item.Meta>
              <span>1998.1.4</span>
              <span>Design</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                Apply
                <Icon name='chevron right' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src='https://i.imgur.com/JDC1Kfu.png' />
          <Item.Content>
            <Item.Header as='a'>Job #5</Item.Header>
            <Item.Meta>
              <span>1998.1.4</span>
              <span>Design</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                Apply
                <Icon name='chevron right' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>

);

export default jobs;