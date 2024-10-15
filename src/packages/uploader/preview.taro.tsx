import React from 'react'
import {
  Del,
  Failure,
  Link as LinkIcon,
  Loading,
} from '@nutui/icons-react-taro'
import { Image, View } from '@tarojs/components'
import Progress from '@/packages/progress/index.taro'
import { FileItem } from '@/packages/uploader/file-item.taro'
import { ERROR } from '@/packages/uploader/utils'

export const Preview: React.FunctionComponent<any> = ({
  fileList,
  previewType,
  deletable,
  onDeleteItem,
  handleItemClick,
  previewUrl,
  deleteIcon,
  children,
}) => {
  const renderIcon = (item: FileItem) => {
    if (item.status === ERROR) {
      return item.failIcon || <Failure color="#fff" />
    }
    return (
      item.loadingIcon || <Loading className="nut-icon-loading" color="#fff" />
    )
  }
  return (
    <>
      {fileList.length !== 0 &&
        fileList.map((item: any, index: number) => {
          return (
            <View
              className={`nut-uploader-preview ${previewType}`}
              key={item.uid}
            >
              {previewType === 'picture' && !children && deletable && (
                <View
                  className="close"
                  onClick={() => onDeleteItem(item, index)}
                >
                  {deleteIcon}
                </View>
              )}
              {previewType === 'picture' && !children && (
                <View className="nut-uploader-preview-img">
                  {item.status === 'ready' ? (
                    <View className="nut-uploader-preview-progress">
                      <View className="nut-uploader-preview-progress-msg">
                        {item.message}
                      </View>
                    </View>
                  ) : (
                    item.status !== 'success' && (
                      <View className="nut-uploader-preview-progress">
                        {renderIcon(item)}
                        <View className="nut-uploader-preview-progress-msg">
                          {item.message}
                        </View>
                      </View>
                    )
                  )}
                  {item.type?.includes('image') ? (
                    <>
                      {item.url && (
                        <Image
                          className="nut-uploader-preview-img-c"
                          style={{ objectFit: 'fill' }}
                          mode="aspectFit"
                          src={item.url}
                          onClick={() => handleItemClick(item, index)}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {previewUrl ? (
                        <Image
                          className="nut-uploader-preview-img-c"
                          mode="aspectFit"
                          src={previewUrl}
                          onClick={() => handleItemClick(item, index)}
                        />
                      ) : (
                        <View className="nut-uploader-preview-img-file">
                          <View
                            onClick={() => handleItemClick(item, index)}
                            className="nut-uploader-preview-img-file-name"
                          >
                            <LinkIcon color="#808080" />
                            <span>&nbsp;{item.name}</span>
                          </View>
                        </View>
                      )}
                    </>
                  )}
                  {item.status === 'success' ? (
                    <View className="tips">{item.name}</View>
                  ) : null}
                </View>
              )}

              {previewType === 'list' && (
                <View className="nut-uploader-preview-list">
                  <View
                    className={`nut-uploader-preview-img-file-name ${item.status}`}
                    onClick={() => handleItemClick(item, index)}
                  >
                    <LinkIcon />
                    <span>&nbsp;{item.name}</span>
                  </View>
                  {deletable && (
                    <Del
                      color="#808080"
                      className="nut-uploader-preview-img-file-del"
                      onClick={() => onDeleteItem(item, index)}
                    />
                  )}
                  {item.status === 'uploading' && (
                    <Progress
                      percent={item.percentage}
                      color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
                      showText={false}
                    />
                  )}
                </View>
              )}
            </View>
          )
        })}
    </>
  )
}
