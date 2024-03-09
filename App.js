import { SafeAreaView, StyleSheet, View } from 'react-native';
import ProfileCard from './src/ProfileCard';


export default function App() {
  return (
      <SafeAreaView style={{ flex: 1 }}>
     <View style ={styles.container}> 
      <ProfileCard/>
    </View>
      </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex:1,
    justifyContent:'center',
    justifyContent: "center",
   
  },
});

