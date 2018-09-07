/**
 * Created by csalas on 8/27/18.
 */
import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'



const LandingMenuComponent = (props) => (
    <Card.Group className="structure-picker" >
        <Card>
            <Card.Content>
                <Card.Header>Checks</Card.Header>
                <Card.Description>
                   Pick the structure for store the transaction.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button className={props.check.structure === 'tree' ? 'active' : ''}
                        basic  onClick={() => props.handleClick('check', 'tree')}
                    >
                        Binary Tree
                    </Button>
                    <Button className={props.check.structure === 'queue' ? 'active' : ''}
                            basic  onClick={() => props.handleClick('check', 'queue')}
                    >
                        Queue
                    </Button>
                </div>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Card.Header>Transfers</Card.Header>
                <Card.Description>
                    Pick the structure for store the transaction.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button className={props.transfers.structure === 'tree' ? 'active' : ''}
                            basic  onClick={() => props.handleClick('transfers', 'tree')}
                    >
                        Binary Tree
                    </Button>
                    <Button className={props.transfers.structure === 'queue' ? 'active' : ''}
                            basic  onClick={() => props.handleClick('transfers', 'queue')}
                    >
                        Queue
                    </Button>
                </div>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Card.Header>Payments</Card.Header>
                <Card.Description>
                    Pick the structure for store the transaction.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button className={props.payments.structure === 'tree' ? 'active' : ''}
                            basic  onClick={() => props.handleClick('payments', 'tree')}
                    >
                        Binary Tree
                    </Button>
                    <Button className={props.payments.structure === 'queue' ? 'active' : ''}
                            basic  onClick={() => props.handleClick('payments', 'queue')}
                    >
                        Queue
                    </Button>
                </div>
            </Card.Content>
        </Card>
    </Card.Group>
)

export default LandingMenuComponent