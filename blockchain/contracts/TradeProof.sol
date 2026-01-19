// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TradeProof {

    struct TradeRecord {
        bytes32 tradeHash;
        uint256 timestamp;
    }

    TradeRecord[] public trades;

    event TradeAnchored(
        uint256 indexed tradeId,
        bytes32 tradeHash,
        uint256 timestamp
    );

    function anchorTrade(bytes32 _tradeHash) external {
        trades.push(
            TradeRecord({
                tradeHash: _tradeHash,
                timestamp: block.timestamp
            })
        );

        emit TradeAnchored(
            trades.length - 1,
            _tradeHash,
            block.timestamp
        );
    }

    function getTrade(uint256 _id)
        external
        view
        returns (bytes32 tradeHash, uint256 timestamp)
    {
        TradeRecord memory t = trades[_id];
        return (t.tradeHash, t.timestamp);
    }

    function totalTrades() external view returns (uint256) {
        return trades.length;
    }
}
