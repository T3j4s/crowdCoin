'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/webster/fs-7am/fullstack/kickstart/crowdcoin(v2)/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          label = _props.label,
          desc = _props.desc;

      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much wei to become an approver'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend.'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Campaign Details'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('div', { 'class': 'ui column grid', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('div', { 'class': 'column', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('div', { 'class': 'ui raised segment', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('a', { 'class': 'ui blue ribbon label', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Project OverView'), _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, this.props.label), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, this.props.desc)))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, 'View Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  label: summary[5],
                  desc: summary[6]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25TaG93IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIl9wcm9wcyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibGFiZWwiLCJkZXNjIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsImNyZWF0ZUVsZW1lbnQiLCJHcm91cCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwiUm93IiwiQ29sdW1uIiwid2lkdGgiLCJhZGRyZXNzIiwicm91dGUiLCJwcmltYXJ5IiwiX3JlZiIsIm1hcmsiLCJfY2FsbGVlIiwiY2FtcGFpZ24iLCJzdW1tYXJ5Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic2VudCIsImFicnVwdCIsInN0b3AiLCJnZXRJbml0aWFsUHJvcHMiLCJfeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFQQSxJQUFJQSxlQUFlLHNGQUFuQjs7O0FBU0EsSUFBSUMsZUFBZSxVQUFVQyxVQUFWLEVBQXNCO0FBQ3ZDLDBCQUFVRCxZQUFWLEVBQXdCQyxVQUF4Qjs7QUFFQSxXQUFTRCxZQUFULEdBQXdCO0FBQ3RCLGtDQUFnQixJQUFoQixFQUFzQkEsWUFBdEI7O0FB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LFNBQWpCLENBQVA7QUFDRDs7QUFFRCxhQUFPa0QsZUFBUDtBQUNELEtBckNNO0FBRkosR0FBRCxDQWpPSjs7QUEyUUEsU0FBT3RELFlBQVA7QUFDRCxDQXJSa0Isa0JBQW5COztrQkF1UmVBLFkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3InO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICcvaG9tZS93ZWJzdGVyL2ZzLTdhbS9mdWxsc3RhY2sva2lja3N0YXJ0L2Nyb3dkY29pbih2MikvcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbnZhciBDYW1wYWlnblNob3cgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2FtcGFpZ25TaG93LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDYW1wYWlnblNob3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbXBhaWduU2hvdyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENhbXBhaWduU2hvdy5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihDYW1wYWlnblNob3cpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYW1wYWlnblNob3csIFt7XG4gICAga2V5OiAncmVuZGVyQ2FyZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDYXJkcygpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJhbGFuY2UgPSBfcHJvcHMuYmFsYW5jZSxcbiAgICAgICAgICBtYW5hZ2VyID0gX3Byb3BzLm1hbmFnZXIsXG4gICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbiA9IF9wcm9wcy5taW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgICAgIHJlcXVlc3RzQ291bnQgPSBfcHJvcHMucmVxdWVzdHNDb3VudCxcbiAgICAgICAgICBhcHByb3ZlcnNDb3VudCA9IF9wcm9wcy5hcHByb3ZlcnNDb3VudCxcbiAgICAgICAgICBsYWJlbCA9IF9wcm9wcy5sYWJlbCxcbiAgICAgICAgICBkZXNjID0gX3Byb3BzLmRlc2M7XG5cblxuICAgICAgdmFyIGl0ZW1zID0gW3tcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBNYW5hZ2VyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXknLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XG4gICAgICB9LCB7XG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3UgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgbXVjaCB3ZWkgdG8gYmVjb21lIGFuIGFwcHJvdmVyJ1xuICAgICAgfSwge1xuICAgICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXG4gICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgUmVxdWVzdHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnMnXG4gICAgICB9LCB7XG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXG4gICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgQXBwcm92ZXJzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgcGVvcGxlIHdobyBoYXZlIGFscmVhZHkgZG9uYXRlZCB0byB0aGlzIGNhbXBhaWduJ1xuICAgICAgfSwge1xuICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCAnZXRoZXInKSxcbiAgICAgICAgbWV0YTogJ0NhbXBhaWduIEJhbGFuY2UgKGV0aGVyKScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC4nXG4gICAgICB9XTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Hcm91cCwgeyBpdGVtczogaXRlbXMsIF9fc291cmNlOiB7XG4gICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICBsaW5lTnVtYmVyOiA3MFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF5b3V0LFxuICAgICAgICB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA3NVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaDMnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDc2XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnQ2FtcGFpZ24gRGV0YWlscydcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBHcmlkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDc4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgR3JpZC5Sb3csXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3OVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgIHsgd2lkdGg6IDE2LCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDgwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3VpIGNvbHVtbiBncmlkJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogODFcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgIHsgJ2NsYXNzJzogJ2NvbHVtbicsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA4MlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3VpIHJhaXNlZCBzZWdtZW50JywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA4M1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgeyAnY2xhc3MnOiAndWkgYmx1ZSByaWJib24gbGFiZWwnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA4NFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ1Byb2plY3QgT3ZlclZpZXcnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgJ2InLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDg0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJywge1xuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogODVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDg2XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlc2NcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogOTJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEdyaWQuQ29sdW1uLFxuICAgICAgICAgICAgICB7IHdpZHRoOiAxMCwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA5M1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDYXJkcygpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgIHsgd2lkdGg6IDYsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogOTVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udHJpYnV0ZUZvcm0sIHsgYWRkcmVzczogdGhpcy5wcm9wcy5hZGRyZXNzLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDk2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTAwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIExpbmssXG4gICAgICAgICAgICAgICAgeyByb3V0ZTogJy9jYW1wYWlnbnMvJyArIHRoaXMucHJvcHMuYWRkcmVzcyArICcvcmVxdWVzdHMnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMDJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgeyBwcmltYXJ5OiB0cnVlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEwNFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ1ZpZXcgUmVxdWVzdHMnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnZ2V0SW5pdGlhbFByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKHByb3BzKSB7XG4gICAgICAgIHZhciBjYW1wYWlnbiwgc3VtbWFyeTtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHN1bW1hcnkgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHtcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuICAgICAgICAgICAgICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXG4gICAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcbiAgICAgICAgICAgICAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNF0sXG4gICAgICAgICAgICAgICAgICBsYWJlbDogc3VtbWFyeVs1XSxcbiAgICAgICAgICAgICAgICAgIGRlc2M6IHN1bW1hcnlbNl1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldEluaXRpYWxQcm9wcztcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBDYW1wYWlnblNob3c7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdzsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25TaG93IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIl9wcm9wcyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibGFiZWwiLCJkZXNjIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsImNyZWF0ZUVsZW1lbnQiLCJHcm91cCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwiUm93IiwiQ29sdW1uIiwid2lkdGgiLCJhZGRyZXNzIiwicm91dGUiLCJwcmltYXJ5IiwiX3JlZiIsIm1hcmsiLCJfY2FsbGVlIiwiY2FtcGFpZ24iLCJzdW1tYXJ5Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic2VudCIsImFicnVwdCIsInN0b3AiLCJnZXRJbml0aWFsUHJvcHMiLCJfeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFQQSxJQUFJQSxlQUFlLHNGQUFuQjs7O0FBU0EsSUFBSUMsZUFBZSxVQUFVQyxVQUFWLEVBQXNCO0FBQ3ZDLDBCQUFVRCxZQUFWLEVBQXdCQyxVQUF4Qjs7QUFFQSxXQUFTRCxZQUFULEdBQXdCO0FBQ3RCLGtDQUFnQixJQUFoQixFQUFzQkEsWUFBdEI7O0FB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