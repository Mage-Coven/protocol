// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.6;

import { IERC20, ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { IConnector } from "../../../savings/peripheral/IConnector.sol";

contract MockConnector is IConnector {
    address save;
    address zUSD;
    uint256 deposited;

    constructor(address _save, address _zUSD) {
        save = _save;
        zUSD = _zUSD;
    }

    modifier onlySave() {
        require(save == msg.sender, "Only SAVE can call this");
        _;
    }

    function deposit(uint256 _amount) external override onlySave {
        IERC20(zUSD).transferFrom(save, address(this), _amount);
        deposited += _amount;
    }

    function withdraw(uint256 _amount) external override onlySave {
        IERC20(zUSD).transfer(save, _amount);
        deposited -= _amount;
    }

    function withdrawAll() external override onlySave {
        IERC20(zUSD).transfer(save, deposited);
        deposited = 0;
    }

    function checkBalance() external view override returns (uint256) {
        return deposited;
    }
}
