import React from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

/*Tipando as props, por estar trabalhando com typescript.*/
type Props = {
    title: string;
}

export default function ButtonIcon({ title }: Props) { /* Passando como parâmetro deste componente */
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}