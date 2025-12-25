import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  ReactElement,
  Children,
} from 'react'
import Transition, { TransitionProps } from './transition'

export interface TransitionGroupProps extends Omit<TransitionProps, 'in'> {
  children?: ReactNode
  appear?: boolean
  enter?: boolean
  exit?: boolean
}

interface ChildData {
  child: ReactElement
  key: string | number
  isAppearing: boolean
}

const TransitionGroup: React.FC<TransitionGroupProps> = (props) => {
  const {
    children,
    appear = false,
    enter = true,
    exit = true,
    ...rest
  } = props

  const [childrenState, setChildrenState] = useState<ChildData[]>(() => {
    const initialChildren = Children.toArray(children) as ReactElement[]
    return initialChildren.map((child) => ({
      child,
      key: child.key || child.props.key || Math.random(),
      isAppearing: true,
    }))
  })

  const prevChildrenRef = useRef<ReactNode>(children)
  const exitingKeysRef = useRef<Set<string | number>>(new Set())

  useEffect(() => {
    const currentChildren = Children.toArray(children) as ReactElement[]
    const prevChildren = Children.toArray(prevChildrenRef.current) as ReactElement[]

    const currentKeys = new Set(currentChildren.map((c) => c.key || c.props.key))
    const prevKeys = new Set(prevChildren.map((c) => c.key || c.props.key))

    const newChildren: ChildData[] = []

    // Handle existing children (might be entering or staying)
    childrenState.forEach((childData) => {
      if (currentKeys.has(childData.key)) {
        // Child is still in the list, update it
        const updatedChild = currentChildren.find(
          (c) => (c.key || c.props.key) === childData.key
        )
        if (updatedChild) {
          newChildren.push({
            ...childData,
            child: updatedChild,
            isAppearing: false, // Not appearing anymore if it was updated
          })
        }
      } else if (!exitingKeysRef.current.has(childData.key)) {
        // Child was removed, mark it as exiting
        exitingKeysRef.current.add(childData.key)
        newChildren.push(childData) // Keep it for the exit transition
      }
    })

    // Handle new children (entering)
    currentChildren.forEach((child) => {
      const key = child.key || child.props.key
      if (!prevKeys.has(key)) {
        newChildren.push({
          child,
          key,
          isAppearing: true,
        })
      }
    })

    setChildrenState(newChildren)
    prevChildrenRef.current = children
  }, [children])

  const handleExited = (key: string | number) => {
    exitingKeysRef.current.delete(key)
    setChildrenState((prev) =>
      prev.filter((childData) => childData.key !== key)
    )
  }

  return (
    <>
      {childrenState.map((childData) => {
        const { child, key, isAppearing } = childData
        const inProp = !exitingKeysRef.current.has(key)

        return (
          <Transition
            key={key}
            {...rest}
            in={inProp}
            appear={isAppearing}
            onExited={() => handleExited(key)}
          >
            {child}
          </Transition>
        )
      })}
    </>
  )
}

export default TransitionGroup