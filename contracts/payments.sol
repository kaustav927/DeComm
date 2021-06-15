pragma solidity ^0.8.5;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Payments {
    address public admin;
    IERC20 public dai;
    event PaymentDone(
        address payer,
        uint256 amount,
        uint256 paymentID,
        uint256 date
    );

    constructor(address adminAddress, address daiAddress) {
        admin = adminAddress;
        dai = IERC20(daiAddress);
    }

    function pay(uint256 amount, uint256 paymentID) external {
        dai.transferFrom(msg.sender, admin, amount);
        emit PaymentDone(msg.sender, amount, paymentID, block.timestamp);
    }
}
