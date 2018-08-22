import React from 'react';
import { connect } from 'react-redux';
import { updateBalance, clearError } from '../actions/index'

const mapStateToProps = (state) => ({
    bank: state.bank
})


const Bank = ({ bank, dispatch }) => {
    let inputDeposit;
    let inputWithdraw;
    return (
        <div>
            <label>Your Balance is {bank.balance}</label>
            <div>
                <input type='text' defaultValue={0} ref={node => inputDeposit = node} />
                <button value='DEPOSIT' onClick={e => {
                    e.preventDefault();
                    dispatch(clearError());
                    dispatch(updateBalance(inputDeposit.value, e.target.value))
                    inputDeposit.value = ''
                }
                }>Deposit</button>
                <input type='text' defaultValue={0} ref={node => inputWithdraw = node} />
                <button value='WITHDRAW' onClick={e => {
                    e.preventDefault();
                    dispatch(clearError());
                    dispatch(updateBalance(inputWithdraw.value, e.target.value))
                    inputWithdraw.value = ''
                }
                }>{bank.balance >= 0 ? 'Withdraw' : 'Overdraw'}</button>
            </div>
            <label>{bank.error}</label>
        </div>
    )
}

export default connect(mapStateToProps)(Bank)