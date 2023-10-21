// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BaseERC20 is ERC20, Ownable {
    constructor(address initialOwner, string memory name, string memory symbol, uint preMint)
        ERC20(name, symbol)
        Ownable(initialOwner)
    {
        _mint(msg.sender, preMint * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}