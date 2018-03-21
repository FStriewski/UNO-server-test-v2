import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, OneToOne } from 'typeorm'
import {Game, Player} from '../games/entities'


type Location = 'Deck' | 'CurrentCard' | 'Player1Hand' | 'Player2Hand' | 'Player3Hand' | 'Player4Hand'
type Color = 'yellow' | 'red' | 'green' | 'blue' | 'black' 

@Entity()
export default class Card extends BaseEntity {

    // Should have n:1 to game and ?n:1 to player?
    @PrimaryGeneratedColumn()
    id?: number

    @Column('int', { nullable: true })
    value: number

    @Column('text', { nullable: true })
    color: Color

    @Column('int', { nullable: true })
    plus: number

    @Column('text', { nullable: false })
    location: Location

    // FS add:
    @OneToOne(_ => Game)
    game: Game

    @OneToMany(_ => Player, player => player.card)
    player: Player

}