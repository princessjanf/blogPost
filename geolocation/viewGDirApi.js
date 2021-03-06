render() {

  return (
    <MapView style={styles.map} initialRegion={{
     latitude:-6.270565,
     longitude:106.759550,
     latitudeDelta: 1,
     longitudeDelta: 1
    }}>

    <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>

        </MapView>

  
  );
}
}

const styles = StyleSheet.create({

map: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
},
});
