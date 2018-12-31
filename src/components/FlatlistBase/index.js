import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';

export default class FlatListBase extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};
  static propTypes = {
    numColumns: PropTypes.number,
    data: PropTypes.array,
    renderItem: PropTypes.func,
    loadMore: PropTypes.func,
    refreshing: PropTypes.bool,
    onRefresh: PropTypes.func,
    renderFooter: PropTypes.func,
    renderHeader: PropTypes.func,
    renderSeparator: PropTypes.func,
    renderEmpty: PropTypes.func,
    horizontal: PropTypes.bool,
    haveId: PropTypes.bool
  };
  static defaultProps = {
    numColumns: 1,
    data: [],
    renderItem: () => <View/>,
    refreshing: false,
    renderFooter: () => <View/>,
    renderHeader: () => <View/>,
    renderSeparator: () => <View/>,
    renderEmpty: () => <View/>,
    horizontal: false,
    haveId: false
  };

  scrollToIndex(params) {
    this.flatlist.scrollToIndex(params);
  }

  _keyExtractor = (item, index) =>
    this.props.haveId ? item.id : index.toString();

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState(state => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  renderHeader = () => {
    return <View/>;
  };
  scrollToEnd() {
    this.flatlist.scrollToEnd();
  }

  render() {
    return (
      <FlatList
        ref={comp => (this.flatlist = comp)}
        data={this.props.data}
        extraData={this.state}
        numColumns={this.props.numColumns}
        keyExtractor={this._keyExtractor}
        renderItem={this.props.renderItem}
        onEndReached={this.props.loadMore}
        onEndReachedThreshold={0.5}
        refreshing={this.props.refreshing}
        onRefresh={this.props.onRefresh}
        ListFooterComponent={this.props.renderFooter}
        ListHeaderComponent={this.props.renderHeader}
        ItemSeparatorComponent={this.props.renderSeparator}
        ListEmptyComponent={this.props.renderEmpty}
        horizontal={this.props.horizontal}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...this.props}
      />
    );
  }
}
