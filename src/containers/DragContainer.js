import React from 'react';
import {FlatList} from 'react-native';
import {Box, Text} from '../components';
import {useDrugQuery} from '../hooks/drug';
import SearchContainer from './SearchContainer';
const DrugItem = ({name, date, description, related}) => (
  <Box className="p-2 mt-2" style={{borderWidth: 0.5, borderColor: 'grey'}}>
    <Box className="flex flex-row justify-between">
      <Box>
        <Text className="font-bold text-lg">{name}</Text>
        <Text className="text-xs">{related}</Text>
      </Box>

      <Text className="text-xs">{date}</Text>
    </Box>
    <Box className="p-3 mt-1" style={{borderWidth: 0.5, borderColor: '#ccc'}}>
      <Text className="text-sm font-bold">{description}</Text>
    </Box>
  </Box>
);
export default function DragContainer(props) {
  const [filter, setFilter] = React.useState('');
  const {data, loading, error} = useDrugQuery({});
  React.useEffect(() => {}, [data, loading, filter]);
  const renderItem = React.useCallback(({item}) => {
    return <DrugItem {...item} />;
  }, []);
  const renderData = React.useCallback(
    xdata => {
      let filterd = xdata;
      if (filter?.length) {
        filterd = filterd?.filter(it => it?.name?.includes(filter));
      }
      return filterd;
    },
    [filter],
  );
  return (
    <>
      <SearchContainer onChange={text => setFilter(text)} />
      <Box className="p-5">
        {renderData(data)?.length > 0 && (
          <Text className="font-bold">Showing {data?.length} results</Text>
        )}
        <FlatList
          data={renderData(data)}
          renderItem={renderItem}
          ListEmptyComponent={
            <Box className=" flex flex-row justify-center items-center p-5">
              <Text className="text-base">List vide</Text>
            </Box>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 300,
          }}
        />
      </Box>
    </>
  );
}
