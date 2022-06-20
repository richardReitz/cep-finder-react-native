import React from 'react';
import { Container, LogoView, LogoTitle, LogoSubTitle, Subtitle} from './styles';

export default function Logo() {
    return (
        <LogoView>
            <LogoTitle>
                CEP Finder
            </LogoTitle>
            <LogoSubTitle>
                <Subtitle>
                Encontre o endereço
                </Subtitle>
                <Subtitle>
                em um clique!
                </Subtitle>
            </LogoSubTitle>
        </LogoView>
    );
}