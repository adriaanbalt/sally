import React from 'react'
import classNames from 'classnames'
import Label from '../../components/Label'
import Checkbox from '../../components/Checkbox'
import Icon from '../../components/Icon'

const UserDetails = (props) => (
  <div className='card'>
    <h2>{`Welcome ${props.phoneNumber}`}</h2>
    <h3>{`Access Token: ${props.accessToken}`}</h3>
    <section>
        <h4>Active Exchanges</h4>
        <ul>
            <li>
                <Checkbox toggle={ () => props.toggleExchangeSetting( 'bittrex' ) }>
                    <Label>Bittrex</Label>
                    <Icon image="check"/>
                </Checkbox>
            </li>
            <li>
                <Checkbox toggle={ () => props.toggleExchangeSetting( 'binance' ) }>
                    <Label>Binance</Label>
                    <Icon image="check"/>
                </Checkbox>
            </li>
        </ul>
    </section>
    <section>
        <h4>Notification Settings</h4>
        <ul>
            <li>
                <Checkbox toggle={ () => props.toggleNotificationSetting( 'text' ) }>
                    <Label>Text Message</Label>
                    <Icon image="check"/>
                </Checkbox>
            </li>
            <li>
                <Checkbox toggle={ () => props.toggleNotificationSetting( 'email' ) }>
                    <Label>Email</Label>
                    <Icon image="check"/>
                </Checkbox>
            </li>
            <li>
                <Checkbox toggle={ () => props.toggleNotificationSetting( 'push' ) }>
                    <Label>Push Notification</Label>
                    <Icon image="check"/>
                </Checkbox>
            </li>
        </ul>
    </section>
  </div>
)

export default UserDetails