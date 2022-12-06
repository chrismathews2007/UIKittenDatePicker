import 'expo-dev-client';
import React from 'react';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import moment from 'moment';

import {
	ApplicationProvider,
	Datepicker,
	IconRegistry,
	Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {

	const minYears = moment().subtract(21, 'years').calendar();
	const endYear = moment().subtract(21, 'years');
	const maxYears = moment().subtract(70, 'years').calendar();
	const [date, setDate] = React.useState(new Date(endYear));
	
		return (
			<SafeAreaProvider initialMetrics={initialWindowMetrics}>
				<IconRegistry icons={[EvaIconsPack]} />
				<ApplicationProvider {...eva} theme={eva.light}>
					<Layout
						style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<Datepicker
							date={date}
							min={new Date(maxYears)}
							max={new Date(minYears)}
							onSelect={(nextDate) => setDate(nextDate)}
							style={{ width: '80%', height: 60, marginHorizontal: 15 }}
						/>
					</Layout>
				</ApplicationProvider>
			</SafeAreaProvider>
		);
}
