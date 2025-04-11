import { VarComponent, BasicAttributes, SetPropsDefaults } from '../../types/varComponent'

export declare const dialogProps: Record<keyof DialogProps, any>

export interface DialogProps extends BasicAttributes {}

export class Dialog extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<DialogProps>
  
  $props: DialogProps
}

export class _DialogComponent extends Dialog {}